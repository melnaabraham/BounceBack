from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_mistralai import ChatMistralAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import ChatPromptTemplate

app = FastAPI()

# Initialize the LLM (Language Model)
MISTRAL_API_KEY = '6G1dyQRfC7qLhT6PNAgnkItq0IoDNdcj'

llm = ChatMistralAI(
    model="mistral-large-latest",
    temperature=0.7,
    max_tokens=1000,
    mistral_api_key=MISTRAL_API_KEY
)

memory = ConversationBufferMemory(return_messages=True)
conversation = ConversationChain(llm=llm, memory=memory, verbose=True)

class CareerInfo(BaseModel):
    field: str
    sector: str
    subsector: str
    role: str

class UserResponses(BaseModel):
    responses: dict[str, str]

@app.post("/get_questions")
async def get_career_questions(career_info: CareerInfo):
    try:
        questions = get_top_questions(
            career_info.field,
            career_info.sector,
            career_info.subsector,
            career_info.role
        )
        return {"questions": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate_plan")
async def create_career_plan(career_info: CareerInfo, user_responses: UserResponses):
    try:
        plan = generate_plan(
            career_info.field,
            career_info.sector,
            career_info.subsector,
            career_info.role,
            user_responses.responses
        )
        return {"plan": plan}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def get_top_questions(field, sector, subsector, role):
    prompt = ChatPromptTemplate.from_template(
        "You are a career advisor. The user wants to transition into the {field} field, "
        "specifically in the {sector} sector, focusing on {subsector} and aiming for a role as {role}. "
        "Generate 5 tailored and relevant questions specific to this career path that ask the user about their knowledge and experience related to the necessary technical skills. "
        "The questions should be structured, concise, and purposefully specific. Focus only on technical skills."
    )
    human_message = prompt.format_messages(field=field, sector=sector, subsector=subsector, role=role)
    response = conversation.predict(input=str(human_message[0]))
    return [q.strip() for q in response.split('\n') if q.strip()]

def generate_plan(field, sector, subsector, role, user_responses):
    prompt = ChatPromptTemplate.from_template(
        "You are a career advisor. The user wants to transition into the {field} field, "
        "specifically in the {sector} sector, focusing on {subsector} and aiming for a role as {role}. "
        "Based on the user's responses:\n\n{user_responses}\n\n"
        "Provide a detailed learning plan with resources, courses, and estimated timelines."
    )
    human_message = prompt.format_messages(
        field=field,
        sector=sector,
        subsector=subsector,
        role=role,
        user_responses="\n".join([f"Q: {q}\nA: {a}" for q, a in user_responses.items()])
    )
    response = conversation.predict(input=str(human_message[0]))
    return response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)