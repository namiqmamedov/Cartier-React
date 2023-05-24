import React, {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Modal} from '@mui/material'
import {Box} from '@mui/material'
import {Typography} from '@mui/material'
import {AiOutlineClose} from 'react-icons/ai'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane} from 'mdb-react-ui-kit';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik'
import '../styles/login.css'

const Login = () => {

  const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

    const [open,
        setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [basicActive,
        setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return ( <> <div className="login-section">
        <div className="container">
            <div className="row">
                <div className="tab-title text-center">
                    <MDBTabs className='mb-3'>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleBasicClick('tab1')}
                                active={basicActive === 'tab1'}>
                                ALREADY REGISTERED?
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleBasicClick('tab2')}
                                active={basicActive === 'tab2'}>
                                CREATE YOUR ACCOUNT
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    <MDBTabsContent>
                        <MDBTabsPane show={basicActive === 'tab1'}>
                            <div className="login__wrapper">
                                <div className="login__body">
                                    <form action="#">
                                        <div className="login-title">
                                            If you are already registered with Cartier, login here:
                                        </div>
                                        <div className="email">
                                            <p className='form-required-text'>
                                                Required field*
                                            </p>
                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                type='email'
                                                variant="standard"
                                                placeholder='your@email.com'/>
                                        </div>
                                        <div className="password">
                                            <TextField
                                                id="standard-basic"
                                                label="Password"
                                                type='password'
                                                variant="standard"
                                                placeholder='*****'/>
                                        </div>
                                        <div className="forgot-password">
                                            <Link onClick={handleOpen}>
                                                Forgot your password?
                                            </Link>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description">
                                                <Box className='modal__forgot-pass'>
                                                    <div className="modal__top">
                                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                                            FORGOT YOUR PASSWORD
                                                        </Typography>
                                                        <div className="close-modal">
                                                            <AiOutlineClose onClick={handleClose}/>
                                                        </div>
                                                    </div>
                                                    <Typography
                                                        className='modal-pass'
                                                        id="modal-modal-description"
                                                        sx={{
                                                        mt: 2
                                                    }}>
                                                        <div className="modal__body">
                                                            <form action="#" method='POST'>
                                                                <p className='form-title'>Provide your account email address to receive an email to reset your password.</p>
                                                                <TextField
                                                                    className='forgot__email-input'
                                                                    id="standard-basic"
                                                                    label="Email"
                                                                    type='email'
                                                                    variant="standard"
                                                                    placeholder='Email address*'/>
                                                            </form>
                                                            <Button type="submit" className='password__input mt-4' variant="text">SUBMIT REQUEST</Button>
                                                        </div>
                                                    </Typography>
                                                </Box>
                                            </Modal>
                                        </div>
                                        <div className="cms-generic">
                                            Read the
                                            <Link>
                                                Privacy Policy
                                            </Link>
                                            for further information
                                        </div>
                                        <div className="form-actions">
                                            <Button className='login-btn' variant="text" type='submit'>Login</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive === 'tab2'}>
                            <div className="login__wrapper">
                                <div className="login__body">
                                    <form action="#">
                                        <div className="login-title">
                                            This space allows you to manage your personal information, e-Boutique orders,
                                            news updates and newsletter subscriptions.
                                        </div>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                className='radio__group-item'
                                                name="radio-buttons-group">
                                                <FormControlLabel value="female" control={< Radio />} label="Female"/>
                                                <FormControlLabel value="male" control={< Radio />} label="Male"/>
                                                <FormControlLabel value="other" control={< Radio />} label="Other"/>
                                            </RadioGroup>
                                        </FormControl>
                                        <div className="email">
                                            <p className='form-required-text'>
                                                Required field*
                                            </p>
                                            <TextField
                                                id="standard-basic"
                                                label="First Name"
                                                type='text'
                                                variant="standard"
                                                placeholder='your@email.com'/>
                                        </div>
                                        <div className="password">
                                            <TextField
                                                id="standard-basic"
                                                label="Last Name"
                                                type='text'
                                                variant="standard"
                                                placeholder='*****'/>
                                        </div>
                                        <div className="form-date-group">
                                            <div className="col-4">
                                                <label class="form-control-label sr-only" for="birthDay">Day</label>
                                                <select
                                                    class="form-control form-control--select form-control--combo"
                                                    id="birthDay"
                                                    data-validate-required-dependency=""
                                                    data-missing-error="Error – Day, Month, and Year fields are required"
                                                    name="dwfrm_profile_birth_birthDay"
                                                    aria-describedby="birthdateFeedback"
                                                    required=""
                                                    data-gtm-form-interact-field-id="1">
                                                    <option id="" value="">
                                                        Day
                                                    </option>
                                                    <option id="01" value="01">
                                                        01
                                                    </option>
                                                    <option id="02" value="02">
                                                        02
                                                    </option>
                                                    <option id="03" value="03">
                                                        03
                                                    </option>
                                                    <option id="04" value="04">
                                                        04
                                                    </option>
                                                    <option id="05" value="05">
                                                        05
                                                    </option>
                                                    <option id="06" value="06">
                                                        06
                                                    </option>
                                                    <option id="07" value="07">
                                                        07
                                                    </option>
                                                    <option id="08" value="08">
                                                        08
                                                    </option>
                                                    <option id="09" value="09">
                                                        09
                                                    </option>
                                                    <option id="10" value="10">
                                                        10
                                                    </option>
                                                    <option id="11" value="11">
                                                        11
                                                    </option>
                                                    <option id="12" value="12">
                                                        12
                                                    </option>
                                                    <option id="13" value="13">
                                                        13
                                                    </option>
                                                    <option id="14" value="14">
                                                        14
                                                    </option>
                                                    <option id="15" value="15">
                                                        15
                                                    </option>
                                                    <option id="16" value="16">
                                                        16
                                                    </option>
                                                    <option id="17" value="17">
                                                        17
                                                    </option>
                                                    <option id="18" value="18">
                                                        18
                                                    </option>
                                                    <option id="19" value="19">
                                                        19
                                                    </option>
                                                    <option id="20" value="20">
                                                        20
                                                    </option>

                                                    <option id="21" value="21">
                                                        21
                                                    </option>
                                                    <option id="22" value="22">
                                                        22
                                                    </option>
                                                    <option id="23" value="23">
                                                        23
                                                    </option>
                                                    <option id="24" value="24">
                                                        24
                                                    </option>
                                                    <option id="25" value="25">
                                                        25
                                                    </option>
                                                    <option id="26" value="26">
                                                        26
                                                    </option>
                                                    <option id="27" value="27">
                                                        27
                                                    </option>
                                                    <option id="28" value="28">
                                                        28
                                                    </option>
                                                    <option id="29" value="29">
                                                        29
                                                    </option>
                                                    <option id="30" value="30">
                                                        30
                                                    </option>
                                                    <option id="31" value="31">
                                                        31
                                                    </option>
                                                </select>

                                            </div>
                                            <div className="col-4">
                                                <select
                                                    class="form-control form-control--select form-control--combo"
                                                    id="birthMonth"
                                                    data-validate-required-dependency=""
                                                    data-missing-error="Error – Day, Month, and Year fields are required"
                                                    name="dwfrm_profile_birth_birthMonth"
                                                    aria-describedby="birthdateFeedback"
                                                    required=""
                                                    data-gtm-form-interact-field-id="2">
                                                    <option id="" value="">
                                                        Month
                                                    </option>
                                                    <option id="Jan" value="0">
                                                        Jan
                                                    </option>
                                                    <option id="Feb" value="1">
                                                        Feb
                                                    </option>
                                                    <option id="Mar" value="2">
                                                        Mar
                                                    </option>
                                                    <option id="Apr" value="3">
                                                        Apr
                                                    </option>
                                                    <option id="May" value="4">
                                                        May
                                                    </option>
                                                    <option id="Jun" value="5">
                                                        Jun
                                                    </option>
                                                    <option id="Jul" value="6">
                                                        Jul
                                                    </option>
                                                    <option id="Aug" value="7">
                                                        Aug
                                                    </option>
                                                    <option id="Sep" value="8">
                                                        Sep
                                                    </option>
                                                    <option id="Oct" value="9">
                                                        Oct
                                                    </option>
                                                    <option id="Nov" value="10">
                                                        Nov
                                                    </option>
                                                    <option id="Dec" value="11">
                                                        Dec
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-4">
                                                <select
                                                    class="form-control form-control--select form-control--combo form-control--combo-last"
                                                    id="birthYear"
                                                    data-validate-required-dependency=""
                                                    data-missing-error="Error – Day, Month, and Year fields are required"
                                                    name="dwfrm_profile_birth_birthYear"
                                                    aria-describedby="birthdateFeedback"
                                                    required=""
                                                    data-gtm-form-interact-field-id="3">
                                                    <option value="">Year</option>
                                                    <option id="2023" value="2023">
                                                        2023
                                                    </option>
                                                    <option id="2022" value="2022">
                                                        2022
                                                    </option>
                                                    <option id="2021" value="2021">
                                                        2021
                                                    </option>
                                                    <option id="2020" value="2020">
                                                        2020
                                                    </option>
                                                    <option id="2019" value="2019">
                                                        2019
                                                    </option>

                                                    <option id="2018" value="2018">
                                                        2018
                                                    </option>
                                                    <option id="2017" value="2017">
                                                        2017
                                                    </option>
                                                    <option id="2016" value="2016">
                                                        2016
                                                    </option>
                                                    <option id="2015" value="2015">
                                                        2015
                                                    </option>
                                                    <option id="2014" value="2014">
                                                        2014
                                                    </option>
                                                    <option id="2013" value="2013">
                                                        2013
                                                    </option>
                                                    <option id="2012" value="2012">
                                                        2012
                                                    </option>
                                                    <option id="2011" value="2011">
                                                        2011
                                                    </option>
                                                    <option id="2010" value="2010">
                                                        2010
                                                    </option>
                                                    <option id="2009" value="2009">
                                                        2009
                                                    </option>
                                                    <option id="2008" value="2008">
                                                        2008
                                                    </option>
                                                    <option id="2007" value="2007">
                                                        2007
                                                    </option>
                                                    <option id="2006" value="2006">
                                                        2006
                                                    </option>
                                                    <option id="2005" value="2005">
                                                        2005
                                                    </option>
                                                    <option id="2004" value="2004">
                                                        2004
                                                    </option>
                                                    <option id="2003" value="2003">
                                                        2003
                                                    </option>
                                                    <option id="2002" value="2002">
                                                        2002
                                                    </option>
                                                    <option id="2001" value="2001">
                                                        2001
                                                    </option>
                                                    <option id="2000" value="2000">
                                                        2000
                                                    </option>
                                                    <option id="1999" value="1999">
                                                        1999
                                                    </option>
                                                    <option id="1998" value="1998">
                                                        1998
                                                    </option>
                                                    <option id="1997" value="1997">
                                                        1997
                                                    </option>
                                                    <option id="1996" value="1996">
                                                        1996
                                                    </option>
                                                    <option id="1995" value="1995">
                                                        1995
                                                    </option>
                                                    <option id="1994" value="1994">
                                                        1994
                                                    </option>
                                                    <option id="1993" value="1993">
                                                        1993
                                                    </option>
                                                    <option id="1992" value="1992">
                                                        1992
                                                    </option>
                                                    <option id="1991" value="1991">
                                                        1991
                                                    </option>
                                                    <option id="1990" value="1990">
                                                        1990
                                                    </option>
                                                    <option id="1989" value="1989">
                                                        1989
                                                    </option>
                                                    <option id="1988" value="1988">
                                                        1988
                                                    </option>
                                                    <option id="1987" value="1987">
                                                        1987
                                                    </option>
                                                    <option id="1986" value="1986">
                                                        1986
                                                    </option>
                                                    <option id="1985" value="1985">
                                                        1985
                                                    </option>
                                                    <option id="1984" value="1984">
                                                        1984
                                                    </option>
                                                    <option id="1983" value="1983">
                                                        1983
                                                    </option>
                                                    <option id="1982" value="1982">
                                                        1982
                                                    </option>
                                                    <option id="1981" value="1981">
                                                        1981
                                                    </option>
                                                    <option id="1980" value="1980">
                                                        1980
                                                    </option>
                                                    <option id="1979" value="1979">
                                                        1979
                                                    </option>
                                                    <option id="1978" value="1978">
                                                        1978
                                                    </option>
                                                    <option id="1977" value="1977">
                                                        1977
                                                    </option>
                                                    <option id="1976" value="1976">
                                                        1976
                                                    </option>
                                                    <option id="1975" value="1975">
                                                        1975
                                                    </option>
                                                    <option id="1974" value="1974">
                                                        1974
                                                    </option>
                                                    <option id="1973" value="1973">
                                                        1973
                                                    </option>
                                                    <option id="1972" value="1972">
                                                        1972
                                                    </option>
                                                    <option id="1971" value="1971">
                                                        1971
                                                    </option>
                                                    <option id="1970" value="1970">
                                                        1970
                                                    </option>
                                                    <option id="1969" value="1969">
                                                        1969
                                                    </option>
                                                    <option id="1968" value="1968">
                                                        1968
                                                    </option>
                                                    <option id="1967" value="1967">
                                                        1967
                                                    </option>
                                                    <option id="1966" value="1966">
                                                        1966
                                                    </option>
                                                    <option id="1965" value="1965">
                                                        1965
                                                    </option>
                                                    <option id="1964" value="1964">
                                                        1964
                                                    </option>
                                                    <option id="1963" value="1963">
                                                        1963
                                                    </option>
                                                    <option id="1962" value="1962">
                                                        1962
                                                    </option>
                                                    <option id="1961" value="1961">
                                                        1961
                                                    </option>
                                                    <option id="1960" value="1960">
                                                        1960
                                                    </option>
                                                    <option id="1959" value="1959">
                                                        1959
                                                    </option>
                                                    <option id="1958" value="1958">
                                                        1958
                                                    </option>
                                                    <option id="1957" value="1957">
                                                        1957
                                                    </option>
                                                    <option id="1956" value="1956">
                                                        1956
                                                    </option>
                                                    <option id="1955" value="1955">
                                                        1955
                                                    </option>
                                                    <option id="1954" value="1954">
                                                        1954
                                                    </option>
                                                    <option id="1953" value="1953">
                                                        1953
                                                    </option>
                                                    <option id="1952" value="1952">
                                                        1952
                                                    </option>
                                                    <option id="1951" value="1951">
                                                        1951
                                                    </option>
                                                    <option id="1950" value="1950">
                                                        1950
                                                    </option>
                                                    <option id="1949" value="1949">
                                                        1949
                                                    </option>
                                                    <option id="1948" value="1948">
                                                        1948
                                                    </option>
                                                    <option id="1947" value="1947">
                                                        1947
                                                    </option>
                                                    <option id="1946" value="1946">
                                                        1946
                                                    </option>
                                                    <option id="1945" value="1945">
                                                        1945
                                                    </option>
                                                    <option id="1944" value="1944">
                                                        1944
                                                    </option>
                                                    <option id="1943" value="1943">
                                                        1943
                                                    </option>
                                                    <option id="1942" value="1942">
                                                        1942
                                                    </option>
                                                    <option id="1941" value="1941">
                                                        1941
                                                    </option>
                                                    <option id="1940" value="1940">
                                                        1940
                                                    </option>
                                                    <option id="1939" value="1939">
                                                        1939
                                                    </option>
                                                    <option id="1938" value="1938">
                                                        1938
                                                    </option>
                                                    <option id="1937" value="1937">
                                                        1937
                                                    </option>
                                                    <option id="1936" value="1936">
                                                        1936
                                                    </option>
                                                    <option id="1935" value="1935">
                                                        1935
                                                    </option>
                                                    <option id="1934" value="1934">
                                                        1934
                                                    </option>
                                                    <option id="1933" value="1933">
                                                        1933
                                                    </option>
                                                    <option id="1932" value="1932">
                                                        1932
                                                    </option>
                                                    <option id="1931" value="1931">
                                                        1931
                                                    </option>
                                                    <option id="1930" value="1930">
                                                        1930
                                                    </option>
                                                    <option id="1929" value="1929">
                                                        1929
                                                    </option>
                                                    <option id="1928" value="1928">
                                                        1928
                                                    </option>
                                                    <option id="1927" value="1927">
                                                        1927
                                                    </option>
                                                    <option id="1926" value="1926">
                                                        1926
                                                    </option>
                                                    <option id="1925" value="1925">
                                                        1925
                                                    </option>
                                                    <option id="1924" value="1924">
                                                        1924
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="email">
                                            <p className='form-required-text'>
                                                Required field*
                                            </p>
                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                type='email'
                                                onChange={handleChange}
                                                value={values.email}
                                                variant="standard"
                                                placeholder='your@email.com'/>
                                        </div>
                                        <div className="password">
                                            <TextField
                                                id="standard-basic"
                                                label="Password"
                                                onChange={handleChange}
                                                value={values.password}
                                                type='password'
                                                variant="standard"
                                                placeholder='*****'/>
                                        </div>
                                        <div className="password">
                                            <TextField
                                                id="standard-basic"
                                                label="Confirm Password"
                                                onChange={handleChange}
                                                value={values.confirmPassword}
                                                type='password'
                                                variant="standard"
                                                placeholder='*****'/>
                                        </div>


                                        <FormControlLabel required control={<Checkbox />} label="Required" />

                                        <div className="form-actions">
                                            <Button className='login-btn' variant="text" type='submit'>CREATE ACCOUNT</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </div>
            </div>
        </div>
    </div> </>    
  )
}

export default Login