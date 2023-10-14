import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";


export const Contacts = () => {
	const { store, actions } = useContext(Context);
	// useEffect(() => {
			
	// 	actions.loadSomeData(false);
	// }, []);
		return (
			<div className="contactsPage container">
				<Link to="/Add">
					<button className="addContact btn btn-success">New contact</button>
				</Link>
						{store.contacts.map((item, index) => {
							return (
								<div className="contactGroup" key={index}>
									<div className="contact"
										style={{
										backgroundImage: `url("https://th.bing.com/th/id/OIP.ilHqvrk_JZBMyBvYY5AJrwHaE8?pid=ImgDet&rs=1")`,
									  	}}>
										<div className="image">
										<img src="https://th.bing.com/th/id/OIP.MLb1Yii_qOTTTPI0F_fqmgD6D6?pid=ImgDet&rs=1"/>
										</div>
										<div className="information">
											<div>
												<h5>{item.full_name}</h5>
												<p><FontAwesomeIcon icon={faLocationDot} /> {item.address}</p>
												<p><FontAwesomeIcon icon={faPhone} /> {item.phone}</p>
												<p><FontAwesomeIcon icon={faEnvelope} /> {item.email}</p>
											</div>
										</div>
										<div className="editContact">
											{/* <button onClick={() => actions.updateContact(item.id)}><FontAwesomeIcon icon={faPencil} className="pencil"/></button> */}
											<Link to={"/Edit/"+ item.id}>
											<button><FontAwesomeIcon icon={faPencil} className="pencil"/></button>
											</Link>
											
											<button onClick={() => actions.deleteContact(item.id)}><FontAwesomeIcon icon={faTrashCan} className="trash"/></button>
										</div>
									</div>
								</div>
									);
								})}	
			</div>
	);
	};