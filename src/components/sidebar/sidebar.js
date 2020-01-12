import React from 'react';
import s from './sidebar/sidebar.module.css';
import {setPostData} from '../../REDUX/List_Reducer';
import {connect} from   'react-redux';
import Translate  from 'react-translate-component';

const Sidebar = (props) => {
  let countOpenTack = props.myPostData.length;

  return (
    <div className={s.sidebar__items}>
     <Translate content='task.count' component='p'/><p>{countOpenTack}</p>
    </div>
  )


}
const mapStateToProps = (state) =>  {
  return {
  myPostData: state.post.myPostData
  }
}
export default connect(mapStateToProps)(Sidebar);
