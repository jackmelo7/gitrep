
import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
Route.post('/add','CustomersController.add')
Route.delete('/del','CustomersController.del')
Route.put('/up','CustomersController.update')
Route.get('/read','CustomersController.read')
Route.post('/readby','CustomersController.readby')

}).middleware('crud')


Route.group(() => {
    Route.post('/adding','DepartmentsController.adding')
    Route.delete('/delete','DepartmentsController.delete')
    Route.put('/update','DepartmentsController.update')
    Route.get('/reading','DepartmentsController.reading')
    Route.post('/readbyy','DepartmentsController.readbyy')
    Route.get('/join','DepartmentsController.join')

}).middleware('crud')