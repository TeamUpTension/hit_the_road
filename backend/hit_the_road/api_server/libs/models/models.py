from datetime import datetime
from pydantic import BaseModel

class Users(BaseModel):
    user_no : int
    user_email : str
    user_id : str
    user_name : str
    register_date : datetime