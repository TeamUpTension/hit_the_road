import { Container } from "@/styles/StyledComponents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const NotFound: React.FC = () => {
    return (<>
        <Header />
        <Container>
            404 페이지가 없습니다
        </Container>
        <Footer />
    </>);
}

export default NotFound;