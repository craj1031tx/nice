""" 
	Sample Model File

	A Model should be in charge of communicating with the Database. 
	Define specific model method that query the database for information.
	Then call upon these model method in your controller.

	Create a model using this template.
"""
from system.core.model import Model

class NoteModel(Model):
	def __init__(self):
		super(NoteModel, self).__init__()
	
	def getNotes(self):
		return self.db.query_db("SELECT * FROM note")

	def create(self, info):
		print info
		query = "INSERT INTO note (name, content, created_at) VALUES (:name, :content, now())"
		data = info
		return self.db.query_db(query, data)