import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const Person = ({ person }) => {
  return (
    <div>
      <div className="row">
        <Card>
          <CardHeader title={person.name} subtitle="Stubtitles!" />
          <p>Films: </p>
          <CardText>
            {person.films.map(film => {
              return (
                <div>
                  <a href={film}> {film} </a>
                  <br />
                </div>
              );
            })}
          </CardText>
        </Card>
      </div>
    </div>
  );
};

export default Person;
