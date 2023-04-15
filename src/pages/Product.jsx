import React from 'react'
import mainModule03 from '../assets/images/mainModule03.webp'
import {Container, Row, Col} from 'reactstrap'
import '../styles/product.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {BsFillGridFill} from 'react-icons/bs'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
};

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props}/>))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}));

const AccordionSummary = styled((props) => (<MuiAccordionSummary expandIcon={'>'} {...props}/>))(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

const Product = () => {
    const [expanded,
        setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded
            ? panel
            : false);
    };

    return ( <> <div className="product__top">
        <div className="product-content d-flex">
            <Col lg='6' className="thumbnail">
                <img src={mainModule03} alt="Product Content Image"/>
            </Col>
            <Col lg='6' className="text-main">
                <div className="wrapper-card">
                    <h1>TANK</h1>
                    <div className='description'>
                        <p>The Tank watch was created by Louis Cartier, who designed it after the tanks
                            of WWI battlefields. Defined by flat vertical brancards and a sapphire cabochon,
                            this symbol of understated elegance has since captivated the world's most astute
                            minds.</p>
                    </div>
                </div>
            </Col>
        </div>
    </div> < div className = "product__main-item" > <Container>
        <Row>
            <div className="product__first-element">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        WATCHES
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        COLLECTIONS
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>TANK</Breadcrumb.Item>
                </Breadcrumb>
                <div className="product-model">
                    <div className="product-count">
                        <span>52 Models</span>
                    </div>
                </div>
                <button className='product-wrapper'>
                    <span>
                        GRID
                        <BsFillGridFill className='grid'/>
                    </span>
                    <span>FEED
                        <Checkbox {...label}/>
                    </span>
                </button>
            </div>
            <div className="product-index">
                <div className="product__filter col-lg-4">
                    <div className="filter__model">
                        SORT BY
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel
                                        value="LowToHigh"
                                        control={< Radio />}
                                        label="PRICE LOW TO HIGH"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel
                                        value="HighToLow"
                                        control={< Radio />}
                                        label="PRICE HIGH TO LOW"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='filter-select'>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group">
                                    <FormControlLabel value="Recommended" control={< Radio />} label="RECOMMENDED"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="filter__model">
                        FILTER BY
                        <div className='filter-select'>
                            <FormControl>
                                <FormControlLabel control={< Checkbox />} label="AVAILABLE ONLINE"/>
                                <FormControlLabel control={< Checkbox />} label="NEW"/>
                            </FormControl>

                        </div>
                    </div>
                    <div className="filter__model">
                        SELECTION FOR
                        <div className='filter-select'>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>Collapsible Group Item #1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className='filter-select'>
                                            <FormControl>
                                                <FormControlLabel control={< Checkbox />} label="AVAILABLE ONLINE"/>
                                                <FormControlLabel control={< Checkbox />} label="NEW"/>
                                            </FormControl>

                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="product__main col-lg-4"></div>
            </div>
        </Row>
    </Container> </div>

    </>)
}

export default Product