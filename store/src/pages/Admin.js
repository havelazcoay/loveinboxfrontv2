import React from 'react';
import '../hojas-de-estilo/Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data =[

];

class Admin extends React.Component{
    state={
        data: data,
        form:{
            id:'',
            producto:'',
            descripcion:'',
            precio:'',
            unidades:''
        },
        modalInsertar: false,
        modalEditar: false,
    };


handleChange=e=>{
this.setState({
    form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
    }})
}

mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
}

ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
}

insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
}

mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
}

ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}

editar=(dato)=>{
    var contador = 0;
    var lista=this.state.data;
    lista.map((registro)=>{
    if(dato.id==registro.id){
        lista[contador].producto=dato.producto;
        lista[contador].descripcion=dato.descripcion;
        lista[contador].precio=dato.precio;
        lista[contador].unidades=dato.unidades;
    }
    contador++;
    })
    this.setState({data: lista, modalEditar: false});
}

eliminar=(dato)=>{
    var opcion=window.confirm("¿ Realmente desea eliminar el registro ?" + dato.id);
    if (opcion){
        var contador = 0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if (registro.id==dato.id){
                lista.splice(contador, 1);
            }
            contador++;
        });
        this.setState({data: lista});
    }
}


   render(){
        return(
            <>
            <Container>
            <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Producto</Button>
            <br /><br />
            <Table>
            <thead> <tr><th>Id</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Unidades</th>
            <th>Acciones </th></tr></thead>
                <tbody>
                    {this.state.data.map((elemento)=>(
                        <tr>
                            <td>{elemento.id} </td>
                            <td>{elemento.producto} </td>
                            <td>{elemento.descripcion} </td>
                            <td>{elemento.precio} </td>
                            <td>{elemento.unidades} </td>
                            <td> <Button className="admin-button" color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                            <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>


            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                <div><h3>Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                    <label>
                    Id:
                    </label>
                    <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Producto:
                    </label>
                    <input className="form-control" name="producto" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Descripción:
                    </label>
                    <input className="form-control" name="descripcion" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Precio:
                    </label>
                    <input className="form-control" name="precio" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Unidades:
                    </label>
                    <input className="form-control" name="unidades" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                <div><h3>Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                    <label>
                    Id:
                    </label>
                    <input className="form-control" readOnly type="text" value= {this.state.form.id}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Producto:
                    </label>
                    <input className="form-control" name="producto" type="text" onChange={this.handleChange} value= {this.state.form.producto}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Descripción:
                    </label>
                    <input className="form-control" name="descripcion" type="text" onChange={this.handleChange} value= {this.state.form.descripcion}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Precio:
                    </label>
                    <input className="form-control" name="precio" type="text" onChange={this.handleChange} value= {this.state.form.precio}/>
                    </FormGroup>
                    <FormGroup>
                    <label>
                    Unidades:
                    </label>
                    <input className="form-control" name="unidades" type="text" onChange={this.handleChange} value= {this.state.form.unidades}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>this.editar(this.state.form)}>Editar</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}
export default Admin;