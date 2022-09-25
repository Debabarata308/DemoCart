import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/Cartslice';


const Cart = () => {
    const dispatch = useDispatch();
    const data = [
        { name: "T-SHART", id: 1, price: 231 },
        { name: "T-SHART", id: 2, price: 500 },
        { name: "T-SHART", id: 3, price: 750 }
    ]


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10 mt-5 d-flex '>
                        {
                            data.map((e) =>
                                <Card style={{ width: '18rem' }} className="m-2">
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{e.name}</Card.Title>
                                        <Card.Text>
                                            Price :{e.price}
                                        </Card.Text>

                                        <Button variant="primary"
                                            onClick={() => dispatch(cartActions.addToCart(e))}>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </>
    )
}

export default Cart