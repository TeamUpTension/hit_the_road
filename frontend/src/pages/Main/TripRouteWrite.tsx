import DragDropList from "../../components/write/DragDropList";
import WriteFooter from "../../components/write/WriteFooter";
import WriteMap from "../../components/write/WriteMap";
import WriteNav from "../../components/write/WriteNav";

const TripRouteWrite: React.FC = () => {
    return (
        <>
            <WriteNav />
            <WriteMap />
            <DragDropList />
            <WriteFooter />
        </>
    )
}
export default TripRouteWrite;