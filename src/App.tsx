import React, {useState} from "react";
import './App.css';
import {Box, Container, Stack} from "@mui/material";
import * as math from "mathjs";



const ClearButton: React.FC<{ handleClear: () => void }> = ({
                                                                handleClear
                                                            }) => (
    <button className="clear w-[33px] h-[24px] mt-3 ml-[15px]" onClick={handleClear}>
        <img src="/icons/x-3.svg" alt=""/>
    </button>
);



const Input: React.FC<{ input: string }> = ({input}) => (
    <div className="input">{input}</div>
);

interface ButtonProps {
    handleClick: (val: string) => void;
    children: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({handleClick, children, className}) => (
    <button className={className} onClick={() => handleClick(children)}>{children}</button>
);





function App() {
    const [input, setInput] = useState("");

    const handleClick = (val: string) => {
        if(val === "×"){
            setInput(input + "*");
        }
        else if(val === "÷"){
            setInput(input + "/");
        }
        else{
            setInput(input + val);
        }

    };

    const handleEqual = () => {
        setInput(math.evaluate(input));
    };

    const handleClear = () => {
        setInput("");
    };


    // @ts-ignore
    return (
        <div className="calculator_div w-full h-[2000px] bg-black p-56 ">
            <Container>
                <span className="text-white opacity-50">Calculator</span>
                <Stack className="main_box w-max h-[390px] bg-[#242530] flex pl-8 pt-6 pr-6">
                    <Stack className="result_box w-[380px] h-[70px] rounded-3xl bg-[#3A3F77] shadow-md ">
                        <Box className="result_num">
                            <Box
                                className="result_pics w-[323px] h-[45px] mt-3 text-white font-inter text-2xl font-normal leading-10 text-right">
                                <Input input={input}/>
                            </Box>
                        </Box>
                    </Stack>


                    <Stack flexDirection="row">
                        <Stack className="numbers_box mr-2.5">
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">1</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">2</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">3</Button>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">4</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">5</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">6</Button>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">7</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">8</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">9</Button>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">.</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-[25px] mt-5 mr-3.5">
                                    <Button handleClick={handleClick}
                                            className="number_col w-[12px] h-[29px] ml-6 mt-2 font-inter text-2xl font-medium text-left text-white">0</Button>
                                </Box>
                                <Box
                                    className="number_back_box w-[65px] h-[50px] bg-[#404258] shadow-md rounded-3xl mt-5 mr-3.5">
                                    <ClearButton handleClear={handleClear}/>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack flexDirection="column">
                            <Stack flexDirection="row" sx={{mb: "20px"}}>
                                <Stack className="function_box">
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px]">
                                        <Button handleClick={handleClick}
                                                className="number_col w-[12px] h-[29px] ml-5 mt-1 font-inter text-3xl font-medium text-left text-white" >×</Button>
                                    </Box>
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px]">
                                        <Button handleClick={handleClick}
                                                className="number_col w-[12px] h-[29px] ml-6 mt-1 font-inter text-2xl font-medium text-left text-white" >+</Button>
                                    </Box>
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px]">
                                        <Button handleClick={handleClick}
                                                className="number_col w-[12px] h-[29px] ml-5 mt-2 font-inter text-2xl font-medium text-left text-white">%</Button>
                                    </Box>
                                </Stack>
                                <Stack className="function_box">
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px] ">
                                        <Button handleClick={handleClick} className="number_col w-[12px] h-[29px] ml-5 mt-1 font-inter text-3xl font-medium text-left text-white">
                                            {'÷'}
                                        </Button>
                                    </Box>
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px]">
                                        <Button handleClick={handleClick}
                                                className="number_col w-[12px] h-[29px] ml-6 mt-1 font-inter text-3xl font-medium text-left text-white">-</Button>
                                    </Box>
                                    <Box
                                        className="number_back_box_3 w-[60px] h-[48px] bg-[#F49D1A] mt-5 mr-3.5 rounded-[50px]">
                                        <Button handleClick={handleClick}
                                                className="number_col w-[12px] h-[29px] ml-5 mt-2.5 font-inter text-3xl font-medium text-left text-white">^</Button>
                                    </Box>
                                </Stack>

                            </Stack>
                            <Box
                                className="number_back_box_equal w-[133px] h-[55px] shadow-md bg-stone-400 rounded-[50px]">
                                <Button handleClick={handleEqual}
                                        className="number_col_3 w-[28.78px] h-[35.36px] mt-0 ml-14 font-inter text-5xl text-left ">=</Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}

export default App;



