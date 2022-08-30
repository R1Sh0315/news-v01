import { BiSearchAlt } from 'react-icons/bi';

export default function Input(props) {
  return (
    <div className="input-btn-container">
      <input className="user-input" />
      <button className="user-search-btn" onClick={props.onClick}><BiSearchAlt /></button>
    </div>
  );
}
