import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FaqContent() {
    return (
        <div className="content-container">
            <Container className="d-flex flex-column align-items-center justify-content-center col-12 col-sm-10 col-md-8 col-lg-6">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How can I use the application?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You have to take your "Profile link" from your profile ingame. You can use it throught the application to see your data ingame or see what miner is the best option or see stats about the miners.
                            In the Users tab, there two buttons if you insert your "Profile link", thats the way you can update your information about your power and bonus or the miners you own.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How are the data obtained?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    )
}