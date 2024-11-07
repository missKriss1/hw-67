import {useDispatch, useSelector} from "react-redux";
import {checkpaswordDoor, deleteNumberPassword, password} from "./counterSlice.ts";
import {RootState} from "../../app/store.ts";

const Counter = () => {
    const doorValue = useSelector((state: RootState) => state.door.value);
    const color = useSelector((state: RootState) => state.door.color);
    const message = useSelector((state: RootState) => state.door.message);
    const dispatch = useDispatch();
    return (
        <div>
            <h4 className='m-5'>Enter the password for the door</h4>
            <div className='w-25 ms-5 mt-5 p-4 border border-secondary' style={{ backgroundColor: color }}>
                   <p>{message}</p>
                   <h2>{doorValue}</h2>
            </div>
            <div className="row w-25 ms-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                    <button
                        className="col-4 p-5 "
                        key={number}
                        onClick={() => dispatch(password(number.toString()))}
                    >
                        {number}
                    </button>
                ))}
                <button  className="col-4 p-5 fs-2" onClick={() => dispatch(checkpaswordDoor())}>E</button>
                <button  className="col-4 p-5 fs-2" onClick={() => dispatch(deleteNumberPassword())}> x </button>
            </div>
        </div>
    );
};

export default Counter;