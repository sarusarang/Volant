import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SizeChart({ category }) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (




        <>



            <section className='pt-2 pb-3'>


                <span className='size-chart' onClick={handleShow}>Size Chart <i className="fa-solid fa-chart-simple"></i></span>


            </section>




            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'

            >
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title>Volant Size Chart</Modal.Title>
                </Modal.Header>


                <Modal.Body className='p-5'>




                    <table className="table table-bordered">

                        <thead>
                            <tr>
                                <th rowspan="2" className="align-middle">SIZE / UK</th>
                                <th rowspan="2" className="align-middle">EU</th>
                                <th colspan="2" className="text-center">FOOT LENGTH</th>
                            </tr>
                            <tr>
                                <th className="text-center">cm</th>
                                <th className="text-center">inch</th>
                            </tr>

                        </thead>



                        {

                            category == "gents" &&


                            <tbody>

                                <tr>
                                    <td>6</td>
                                    <td>40</td>
                                    <td>24.2 - 24.9</td>
                                    <td>9.5 - 9.8</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>41</td>
                                    <td>25 - 25.7</td>
                                    <td>9.8 - 10.1</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>42</td>
                                    <td>25.8 - 26.5</td>
                                    <td>10.2 - 10.4</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>43</td>
                                    <td>26.6 - 27.3</td>
                                    <td>10.5 - 10.7</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>44/45</td>
                                    <td>27.4 - 28.1</td>
                                    <td>10.8 - 11.1</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>46</td>
                                    <td>28.2 - 28.9</td>
                                    <td>11.1 - 11.4</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>47</td>
                                    <td>29 - 29.7</td>
                                    <td>11.4 - 11.7</td>
                                </tr>
                            </tbody>


                        }



                        {

                            category == "ladies" &&

                            < tbody >

                                <tr>
                                    <td>5</td>
                                    <td>36</td>
                                    <td>22.8 - 23.5</td>
                                    <td>9 - 9.3</td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>37</td>
                                    <td>23.6 - 24.3</td>
                                    <td>9.5 - 9.8</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>38</td>
                                    <td>24.4 - 25.1</td>
                                    <td>9.6 - 9.9</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>39/40</td>
                                    <td>25.2 - 25.9</td>
                                    <td>9.9 - 10.2</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>41</td>
                                    <td>26 - 26.7</td>
                                    <td>10.2 - 10.5</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>42</td>
                                    <td>26.8 - 27.5</td>
                                    <td>10.6 - 10.8</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>43</td>
                                    <td>27.6 - 28.3</td>
                                    <td>10.9 - 11.1</td>
                                </tr>
                            </tbody>

                        }



                        {

                            category == "boys&girls" &&



                            < tbody >

                                <tr>
                                    <td>BOYS</td>
                                    <td>1</td>
                                    <td>33</td>
                                    <td>20.2 - 20.9</td>
                                    <td>8 - 8.2</td>
                                </tr>
                                <tr>
                                    <td>BOYS</td>
                                    <td>2</td>
                                    <td>34</td>
                                    <td>21 - 21.7</td>
                                    <td>8.3 - 8.5</td>
                                </tr>
                                <tr>
                                    <td>BOYS</td>
                                    <td>3</td>
                                    <td>35/36</td>
                                    <td>21.8 - 22.5</td>
                                    <td>8.6 - 8.9</td>
                                </tr>
                                <tr>
                                    <td>BOYS</td>
                                    <td>4</td>
                                    <td>37</td>
                                    <td>22.6 - 23.3</td>
                                    <td>8.9 - 9.2</td>
                                </tr>
                                <tr>
                                    <td>BOYS</td>
                                    <td>5</td>
                                    <td>38</td>
                                    <td>23.4 - 24.1</td>
                                    <td>9.2 - 9.5</td>
                                </tr>
                                <tr>
                                    <td>SENIOR BOYS</td>
                                    <td>6</td>
                                    <td>40</td>
                                    <td>24.2 - 24.9</td>
                                    <td>9.5 - 9.8</td>
                                </tr>
                                <tr>
                                    <td>SENIOR BOYS</td>
                                    <td>7</td>
                                    <td>41</td>
                                    <td>25 - 25.7</td>
                                    <td>9.8 - 10.1</td>
                                </tr>
                                <tr>
                                    <td>SENIOR BOYS</td>
                                    <td>8</td>
                                    <td>42</td>
                                    <td>25.8 - 26.5</td>
                                    <td>10.2 - 10.4</td>
                                </tr>
                                <tr>
                                    <td>SENIOR BOYS</td>
                                    <td>9</td>
                                    <td>43</td>
                                    <td>26.6 - 27.3</td>
                                    <td>10.5 - 10.7</td>
                                </tr>
                                <tr>
                                    <td>SENIOR BOYS</td>
                                    <td>10</td>
                                    <td>44/45</td>
                                    <td>27.4 - 28.1</td>
                                    <td>10.8 - 11.1</td>
                                </tr>




                                <tr>
                                    <td>GIRLS</td>
                                    <td>1</td>
                                    <td>31</td>
                                    <td>19.6 - 20.3</td>
                                    <td>7.7 - 8</td>
                                </tr>
                                <tr>
                                    <td>GIRLS</td>
                                    <td>2</td>
                                    <td>32</td>
                                    <td>20.4 - 21.1</td>
                                    <td>8 - 8.3</td>
                                </tr>
                                <tr>
                                    <td>GIRLS</td>
                                    <td>3</td>
                                    <td>33</td>
                                    <td>21.2 - 21.9</td>
                                    <td>8.3 - 8.6</td>
                                </tr>
                                <tr>
                                    <td>GIRLS</td>
                                    <td>4</td>
                                    <td>34/35</td>
                                    <td>22 - 22.7</td>
                                    <td>8.7 - 8.9</td>
                                </tr>
                                <tr>
                                    <td>SENIOR GIRLS</td>
                                    <td>5</td>
                                    <td>36</td>
                                    <td>22.8 - 23.5</td>
                                    <td>9 - 9.3</td>
                                </tr>
                                <tr>
                                    <td>SENIOR GIRLS</td>
                                    <td>6</td>
                                    <td>37</td>
                                    <td>23.6 - 24.3</td>
                                    <td>9.3 - 9.6</td>
                                </tr>
                                <tr>
                                    <td>SENIOR GIRLS</td>
                                    <td>7</td>
                                    <td>38</td>
                                    <td>24.4 - 25.1</td>
                                    <td>9.6 - 9.9</td>
                                </tr>
                                <tr>
                                    <td>SENIOR GIRLS</td>
                                    <td>8</td>
                                    <td>39/40</td>
                                    <td>25.2 - 25.9</td>
                                    <td>9.9 - 10.2</td>
                                </tr>
                                <tr>
                                    <td>SENIOR GIRLS</td>
                                    <td>9</td>
                                    <td>41</td>
                                    <td>26 - 26.7</td>
                                    <td>10.2 - 10.5</td>
                                </tr>


                            </tbody>

                        }




                        {

                            category == "kids" &&



                            <tbody>
                                
                                <tr>
                                    <td>KIDS</td>
                                    <td>8</td>
                                    <td>25/26</td>
                                    <td>15.2 - 15.9</td>
                                    <td>6 - 6.3</td>
                                    <td>3.0 - 3.6 Years</td>
                                </tr>
                                <tr>
                                    <td>KIDS</td>
                                    <td>9</td>
                                    <td>27</td>
                                    <td>16.0 - 16.7</td>
                                    <td>6.3 - 6.6</td>
                                    <td>3.6 - 4.6 Years</td>
                                </tr>
                                <tr>
                                    <td>KIDS</td>
                                    <td>10</td>
                                    <td>28</td>
                                    <td>16.8 - 17.5</td>
                                    <td>6.6 - 6.9</td>
                                    <td>4.6 - 5.6 Years</td>
                                </tr>
                                <tr>
                                    <td>KIDS</td>
                                    <td>11</td>
                                    <td>29</td>
                                    <td>17.6 - 18.3</td>
                                    <td>6.9 - 7.2</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>KIDS</td>
                                    <td>12</td>
                                    <td>30/31</td>
                                    <td>18.4 - 19.1</td>
                                    <td>7.2 - 7.5</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>KIDS</td>
                                    <td>13</td>
                                    <td>32</td>
                                    <td>19.2 - 19.9</td>
                                    <td>7.5 - 7.8</td>
                                    <td></td>
                                </tr>
                            </tbody>


                        }



                    </table>



                </Modal.Body>



            </Modal >


        </>






    )





}

export default SizeChart