
from system.core.router import routes


routes['default_controller'] = 'Note'
routes['POST']['/process/create'] = 'Note#create'
