import React from 'react';
import './App.css';
import {Box, Container, Stack} from "@mui/material";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

function App() {
    return (
        <div className="calculator_div">
            <Container>
                <Stack className="main_box">
                    <Stack className="result_box">
                        <Box className="result_num">
                            <Box className="result_pics">
                                0
                            </Box>
                        </Box>
                    </Stack>


                    <Stack flexDirection="row">
                        <Stack className="numbers_box" sx={{mr: "10px"}}>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        1
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        2
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        3
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        4
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        5
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        6
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        7
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        8
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        9
                                    </Box>
                                </Box>
                            </Stack>
                            <Stack className="number_line" flexDirection={"row"}>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        .
                                    </Box>
                                </Box>
                                <Box className="number_back_box">
                                    <Box className="number_col">
                                        0
                                    </Box>
                                </Box>
                                <Box className="number_back_box_2">
                                    <Box className="number_col_2">
                                        <img src={"/icons/x-3.svg"}/>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack flexDirection="column">
                            <Stack flexDirection="row" sx={{mb: "20px"}}>
                                <Stack className="function_box">
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            x
                                        </Box>
                                    </Box>
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            +
                                        </Box>
                                    </Box>
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            %
                                        </Box>
                                    </Box>
                                </Stack>
                                <Stack className="function_box">
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            /
                                        </Box>
                                    </Box>
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            -
                                        </Box>
                                    </Box>
                                    <Box className="number_back_box_3">
                                        <Box className="number_col">
                                            *
                                        </Box>
                                    </Box>
                                </Stack>

                            </Stack>
                            <Box className="number_back_box_equal">
                                <Box className="number_col_3">
                                    =
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}

export default App;



