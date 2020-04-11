import React from 'react'
import '../App.css'

export default function Student(props) {
    return (
        <div>
            <div className="student-card">
                <img src={props.student.img} alt={props.student.name} />
                <div className="student-info">
                    <h3>{props.student.name}</h3>
                    <p>
                        <strong>Identity:</strong> {props.student.identity}
                    </p>
                    <p>
                        <strong>Age:</strong> {props.student.age}
                    </p>
                    <p>
                        <strong>Best Friends:</strong> {props.student.bestFriend}
                    </p>
                </div>
            </div>
        </div>
    );
}
