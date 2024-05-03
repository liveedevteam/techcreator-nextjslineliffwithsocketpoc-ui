
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, useMediaQuery, Grid, TextField, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface AccordionComponentProps {
    title: string;
    picture: string;
    content: string;
    isOpen: boolean
    onChange: any
}



const AccordionComponent: React.FC<AccordionComponentProps> = ({ title, picture, content, isOpen, onChange }) => {
    let width = '60px';
    let height = '60px';
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const fontSize = isSmallScreen ? '11px' : '16px';
    const [shouldDisplayDetails, setShowDisplayDetails] = useState(false)



    if (picture === 'accrodion-image/cs_seven_11.png') {
        width = '120px';
        height = '60px';
    }

    console.log(title)

    useEffect(() => {
        if (title === "Credit Card") {
            setShowDisplayDetails(true)

        }
        else {
            setShowDisplayDetails(false)
        }
        return () => {

        }
    }, [])

    const [selectedOption, setSelectedOption] = useState('เต็มจำนวน');
    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const [textField1Value, setTextField1Value] = useState('บริษัท บัตรกรุงไทย จำกัด (มหาชน)(KTC)');
    const [textField2Value, setTextField2Value] = useState('');
    const [textField3Value, setTextField3Value] = useState('6,000');
    const handleTextField1Change = (event: any) => {
        setTextField1Value(event.target.value);
    };

    const handleTextField2Change = (event: any) => {
        setTextField2Value(event.target.value);
    };

    const handleTextField3Change = (event: any) => {
        setTextField3Value(event.target.value);
    };


    const [textFieldValue, setTextFieldValue] = useState('');
    const handleTextFieldChange = (event: any) => {
        setTextFieldValue(event.target.value);
    };

    const bankArr = [
        {
            "id": 187,
            "ParamCode": "002",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร กรุงเทพ จำกัด(มหาชน)(BBL)",
            "ParamValue2": "BBL",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 6,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 189,
            "ParamCode": "004",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร กสิกรไทย จำกัด (มหาชน)(KBANK)",
            "ParamValue2": "KBANK",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 3,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 190,
            "ParamCode": "005",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "บริษัท บัตรกรุงไทย จำกัด (มหาชน)(KTC)",
            "ParamValue2": "KTB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 4,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 422,
            "ParamCode": "011",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร ทหารไทยธนชาต จำกัด(มหาชน)",
            "ParamValue2": "ttb",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 2,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 421,
            "ParamCode": "014",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร ไทยพาณิชย์ จำกัด (มหาชน)(SCB)",
            "ParamValue2": "SCB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 7,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 192,
            "ParamCode": "017",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร ซิตี้แบงก์ (CTI)",
            "ParamValue2": "CITI",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 8,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 194,
            "ParamCode": "020",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร สแตนดาร์ดชาร์เตอร์ (ไทย) จำกัด (มหาชน)",
            "ParamValue2": "SCBT",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 195,
            "ParamCode": "022",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร ซีไอเอ็มบี ไทย ",
            "ParamValue2": "CIMB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 196,
            "ParamCode": "024",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธนาคาร ยูโอบี จำกัด (มหาชน) (UOB)",
            "ParamValue2": "UOB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 352,
            "ParamCode": "025",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "กรุงศรีการ์ด (KCC)",
            "ParamValue2": "KCC",
            "ParamCondition1": null,
            "ParamCondition2": "EDC",
            "ParamMisc1Num": 5,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 202,
            "ParamCode": "030",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธ.ออมสิน",
            "ParamValue2": "GSB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 203,
            "ParamCode": "031",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธ.ฮ่องกงและเซี่ยงไฮ้",
            "ParamValue2": "HSBC",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 212,
            "ParamCode": "065",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "บมจ.ธนาคารทหารไทยธนชาต",
            "ParamValue2": "TTB",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 1,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 217,
            "ParamCode": "070",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "ธ.ไอซีบีซี ไทย",
            "ParamValue2": "ICBC",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        },
        {
            "id": 316,
            "ParamCode": "201",
            "ParamGroup": "BANK",
            "ParamName": null,
            "ParamValue1": "บ.อิออน ธนสินทรัพย์",
            "ParamValue2": "AEON",
            "ParamCondition1": null,
            "ParamCondition2": null,
            "ParamMisc1Num": 99,
            "ParamMisc2Num": 0,
            "ParamMisc3Num": 0,
            "ParamMisc1": null,
            "ParamMisc2": null,
            "ParamMisc3": null,
            "ParamMisc4": null,
            "ParamComment": null,
            "Status": "A"
        }
    ]

    console.log(textField1Value)

    return (
        <>
            <Accordion expanded={isOpen} onChange={onChange}>
                <AccordionSummary>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Radio checked={isOpen} onChange={onChange} />
                        <Typography style={{ fontSize: fontSize }}>{title}</Typography>
                        <div style={{ marginLeft: '16px', maxWidth: '100%', height: 'auto' }}>
                            <img src={picture} style={{ width: width, height: height }} />
                        </div>

                    </div>
                </AccordionSummary>
                {shouldDisplayDetails && (
                    <AccordionDetails>
                        <FormControl component="fieldset">
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12}>
                                    <RadioGroup
                                        aria-label="การผ่อนชำระ"
                                        name="paymentMethod"
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                    >
                                        <Grid container direction="row">
                                            <FormControlLabel
                                                value="เต็มจำนวน"
                                                control={<Radio />}
                                                label="เต็มจำนวน"
                                            />
                                            <FormControlLabel
                                                value="ผ่อนชำระ"
                                                control={<Radio />}
                                                label="ผ่อนชำระ"
                                            />
                                        </Grid>
                                    </RadioGroup>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-select-currency"
                                        fullWidth
                                        variant='standard'
                                        select
                                        label="ธนาคารเจ้าของบัตร"
                                        defaultValue={'ธนาคาร กรุงเทพ จำกัด(มหาชน)(BBL)'}
                                        value={textField1Value}
                                        onChange={handleTextField1Change}
                                    >
                                        {bankArr.map((option) => (
                                            <MenuItem key={option.id} value={option.ParamValue1}>
                                                {option.ParamValue1}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>



                                <Grid item xs={12}>
                                    <TextField
                                        label="จำนวนงวด"
                                        variant='standard'
                                        disabled
                                        fullWidth
                                        value={textField2Value}
                                        onChange={handleTextField2Change}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Total Amount"
                                        variant='standard'
                                        disabled
                                        fullWidth
                                        value={textField3Value}
                                        onChange={handleTextField3Change}
                                    />
                                </Grid>

                                {selectedOption === 'ผ่อนชำระ' && (
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Amount per month (หรือ 0% ตามเงื่อไขที่กำหนด)"
                                            variant="standard"
                                            fullWidth
                                            value={textFieldValue}
                                            required
                                            onChange={handleTextFieldChange}
                                            disabled
                                        />

                                    </Grid>
                                )}

                            </Grid>
                        </FormControl>
                    </AccordionDetails>
                )}
            </Accordion>
        </>
    );
};
export default AccordionComponent;
