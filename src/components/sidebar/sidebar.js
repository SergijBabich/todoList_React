import React from 'react';
import s from './sidebar/sidebar.module.css';
import {setPostData} from '../../REDUX/List_Reducer';
import {connect} from   'react-redux';
const Sidebar = (props) => {
  //let countOpenTack = props.myPostData.length;

  return (
    <div>

    </div>
  )


}
const mapStateToProps = (state) =>  {
  return {
  myPostData: state.post.myPostData
  }
}
export default connect(mapStateToProps)(Sidebar);
