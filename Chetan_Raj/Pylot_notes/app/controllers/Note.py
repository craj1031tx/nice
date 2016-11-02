"""
	Sample Controller File

	A Controller should be in charge of responding to a request.
	Load models to interact with the database and load views to render them to the client.

	Create a controller using this template
"""
from system.core.controller import *

class Note(Controller):
	def __init__(self, action):
		super(Note, self).__init__(action)
	
		self.load_model('NoteModel')
		self.db = self._app.db

   
	def index(self):
		notes = self.models['NoteModel'].getNotes()
		return self.load_view('index.html', notes = notes)

	# def partial(self):
	# 	notes = self.models['NoteModel'].getNotes()
	# 	return self.load_view('partial.html', notes = notes)

	def create(self):
		response = self.models['NoteModel'].create(request.form.copy())
		notes = self.models['NoteModel'].getNotes()
		return self.load_view('partial.html', notes = notes)