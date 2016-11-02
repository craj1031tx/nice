
from system.core.router import routes

routes['default_controller'] = 'Sticky'
routes['POST']['/process/create'] = 'Sticky#create'
# routes['GET']['/delete/<id>'] = 'Sticky#delete'
routes['GET']['/partial'] = 'Sticky#partial'
routes['POST']['/process/delete'] = 'Sticky#delete'
routes['GET']['/delete/partial'] = 'Sticky#delete_partial'