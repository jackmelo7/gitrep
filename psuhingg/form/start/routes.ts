

import Route from '@ioc:Adonis/Core/Route'

Route.post('/add','FsController.add')
Route.get('/read','FsController.read')
Route.delete('/delete/:id','FsController.delete')

