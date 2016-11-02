
from system.core.model import Model

class StickyModel(Model):
	def __init__(self):
		super(StickyModel, self).__init__()

	def show_all(self):
		return self.db.query_db("SELECT * from sticky")

	def create(self, info):
		query = "INSERT INTO sticky (name, content, created_at) VALUES (:name, :content, now())"
		data = info
		return self.db.query_db(query, data)

	def delete(self, info):
		query = "DELETE FROM sticky WHERE id = :id"
		data = {"id": info['id']}
		return self.db.query_db(query, data)