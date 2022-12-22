import PlanTypeTable from "./PlanTypeTable";
import TotalDocs from "./TotalDocs";
import { Row, Col} from "antd";


export default function Tables() {
  return (
    <div className="tables">
      <Row gutter={16}>
        <Col span={12}>
          <PlanTypeTable />
        </Col>
        <Col span={12}>
          <TotalDocs />
        </Col>
      </Row>
    </div>
  );
}
