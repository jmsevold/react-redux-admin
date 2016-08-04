import React, { Component, PropTypes } from 'react';



class CoursesPage extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      course: {title: ''}  
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSaveCourse = this.onSaveCourse.bind(this);
  }
  
  onTitleChange(e){
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({
      course: course
    });
    console.log(`${this.state.course.title}`);
  }
  
  onSaveCourse(){
    console.log(`saving course ${this.state.course.title}`);   
  }
  
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        
        <input
          type="submit"
          onClick={this.onSaveCourse}
          value="Save"
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default CoursesPage;
