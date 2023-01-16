import React from "react";

const Login = () => {
    return (
        <div className="App w-full h-full flex justify-center items-center relative bg-purple-200">
            <div
                className="w-[400px] h-auto min-h-[350px] flex flex-col justify-between items-center z-[2] text-center border border-[#ffffff1a] backdrop-blur-[4.9px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl bg-[#ffffff33] p-[2.5rem_2rem_1.5rem_2rem]">
                <form className="w-full">
                    <p className="login relative uppercase font-bold text-[2em] tracking-[3px] text-stone-800  select-none">
                        لاگین
                    </p>
                    <div className="flex flex-col mt-2">
                        <label className="flex justify-end font-bold text-[1em] select-none">
                            پسورد
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={""}
                            className="border border-[#111] rounded mt-2 p-2"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 mt-6 rounded-full"
                    >
                        ورود
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;