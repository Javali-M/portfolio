import React from 'react'
import { Document, Page } from 'react-pdf';
// import { Page } from 'react-pdf'
import resume from '../assets/resume.pdf'
import {Container, Header, Grid,} from 'semantic-ui-react'

const Resume = () => {
  
  return(
  <div>
    <iframe
            style={{ width: "100%", height: "100vh" }}
            src={resume}
            type='application/pdf'
            title='title'
          />
</div>
        // {/* <Container fluid>
        //   <Grid stackable>
        //     <Grid.Row>
        //       <Grid.Column width={4}>
        //       </Grid.Column>
        //       <Grid.Column width={8}>
        //         <Header className='header' as='h1'>Résumé</Header>
        //         <Document file={resume}>
        //           <Page pageNumber={1} />
        //         </Document>
        //       </Grid.Column>
        //       <Grid.Column width={4}>
        //       </Grid.Column>            
        //     </Grid.Row>
        //   </Grid>
        // </Container> */}

  );
}
 export default Resume