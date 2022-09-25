import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from "../redux/Cartslice";


const Showcad = () => {
  let data = useSelector((state) => (state.cartitem.cart ? state.cartitem.cart : []));
  const dispatch = useDispatch();
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
            {data.length > 0 ? (
              data.map((e) => {
                return (
                  <Card style={{ width: '50rem' }} className="pt-4 mt-5">
                    <div className='row'>
                      <div className='col-8 ' >
                        <div className='row'>
                          <div className='col-7 '><Card.Img variant="top" src="holder.js/500px500" /></div>
                          <div className='col-5 mt-2'>
                            <>Price :{e.price}</>
                          </div>
                        </div>
                      </div>
                      <div className='col-4 mb-3'><Button variant="primary" onClick={() => dispatch(cartActions.deleteItem(e))}>Delete to cart</Button></div>

                    </div>
                  </Card>
                );
              })
            ) : (
              <div className="row mt-5">
                <div className="col text-center">
                  <h1>No Data Found.</h1>
                </div>
              </div>
            )}
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </>
  )
}

export default Showcad