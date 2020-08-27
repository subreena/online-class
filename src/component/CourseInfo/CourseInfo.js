import React from 'react';



const CourseInfo = (props) => {
    const {title, thumb, price, trainer, rating , category} = props.course;
    return (
        <div className="col-md-4">
        <div className="single-item text-center my-4">
          <div className="card p-2">
            <h4 className="text-light mb-3 bg-info p-2"> <small>Category: {category}</small></h4>
            <img className="card-img-top" src={thumb} alt={title} />
            <div className="card-body">
              <h5 className="card-title"><strong><u>{title}</u></strong></h5>
              <h6 className="card-text">Trainer: {trainer}</h6>
              <h4 className="price">${price}</h4>
              <p className = "text-primary">Ratings: {rating}</p>
              <button className="btn btn-lg btn-primary"
                onClick={ () =>props.handleAddCart(props.course)}>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
            
        
    );
};

export default CourseInfo;