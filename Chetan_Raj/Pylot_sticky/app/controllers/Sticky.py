
from system.core.controller import *

class Sticky(Controller):
	def __init__(self, action):
		super(Sticky, self).__init__(action)

		self.load_model('StickyModel')
		self.db = self._app.db

	def index(self):
		response = self.models['StickyModel'].show_all()
		return self.load_view('index.html', response = response)

	def create(self):
		print "REQUEST FORM!!!!!!!!!!!!!!!!!!!!"
		print request.form.copy()
		self.models['StickyModel'].create(request.form.copy())
		return redirect('/partial')

	def delete(self):
		self.models['StickyModel'].delete(request.form.copy())
		return redirect('/delete/partial')

	def partial(self):
		response = self.models['StickyModel'].show_all()
		return self.load_view('partial.html', response = response)

	def delete_partial(self):
		response = self.models['StickyModel'].show_all()
		return self.load_view('partial.html', response = response)