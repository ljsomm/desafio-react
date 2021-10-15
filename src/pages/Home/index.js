import ContentDiv from '../../components/ContentDiv';
import Datatable from '../../components/Datatable';
import DefaultLayout from '../../components/DefaultLayout';
import DivBody from '../../components/DivBody';
import DivHeader from '../../components/DivHeader';

function Home() {
  
  return (
    <DefaultLayout>
      <main>
        <ContentDiv>
          <DivHeader>Sumário dos recursos dos servidores</DivHeader>
          <DivBody>
             <Datatable col={true}/> 
          </DivBody>
        </ContentDiv> 
        <ContentDiv>
          <DivHeader>Tabela de Servidores</DivHeader>
          <DivBody>
            <Datatable col={false}/>
          </DivBody>
        </ContentDiv> 
      </main>
    </DefaultLayout>
  );
}

export default Home;