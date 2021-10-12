import ContentDiv from '../../components/ContentDiv';
import DefaultLayout from '../../components/DefaultLayout';
import DivBody from '../../components/DivBody';
import DivHeader from '../../components/DivHeader';
function Home() {
  return (
    <DefaultLayout>
      <main>
        <ContentDiv>
          <DivHeader>Sumário dos recursos dos servidores</DivHeader>
          <DivBody>Aqui é o corpo</DivBody>
        </ContentDiv> 
        <ContentDiv>
          <DivHeader>Tabela de Servidores</DivHeader>
          <DivBody>Aqui é o corpo</DivBody>
        </ContentDiv> 
      </main>
    </DefaultLayout>
  );
}

export default Home;