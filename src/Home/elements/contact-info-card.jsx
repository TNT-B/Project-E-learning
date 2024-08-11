import React,{Component} from 'react'; 
import { Link } from 'react-router-dom';

class ContactInfoCard extends Component{
	render(){
		return(
			<>
				<div className="bg-primary text-white contact-info-bx">
					<div className="heading-bx left mb-4">
						<h3 className="m-b10 title-head">Thông tin <span> liên hệ</span></h3>
						<p className="m-b0">It is a long established fact that a reader will be distracted</p>
					</div>
					<div className="widget widget_getintuch">	
						<ul>
							<li><i className="ti-location-pin"></i>** Cơ sở 1 - Trụ sở chính: 112 Cao Thắng, Quận 3, TPHCM</li>
							<li><i className="ti-location-pin"></i>** Cơ sở 2: Lầu 2 - 459 Sư Vạn Hạnh, Quận 10, TPHCM (Ngay ĐH Y Dược Phạm Ngọc Thạch</li>
								<li><i className="ti-location-pin"></i>* *Cơ sở 3: 82 Ung Văn Khiêm, Bình Thạnh, TPHCM (Cuối đường D2, gần ĐH HuTech)</li>
								<li><i className="ti-location-pin"></i>* *Cơ sở 4: 110 Đường số 10 nội bộ khu CityLand Phan Văn Trị - Gò Vấp, TPHCM</li>
								<li><i className="ti-location-pin"></i>* *Cơ sở 5: 56 Lê Cảnh Tuân, Tân Phú, TPHCM</li>
								<li><i className="ti-location-pin"></i>* *Cơ sở 6: 6C Đường số 8, Linh Tây, Thủ Đức, TPCHM (gần ĐH Cảnh Sát)</li>
								<li><i className="ti-location-pin"></i>* *Cơ sở 7: 103 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng</li>
							<li><i className="ti-mobile"></i>(+84) 961.05.10.14</li>
							<li><i className="ti-email"></i>info@cybersoft.edu.vn</li>
						</ul>
					</div>
					<h5 className="m-t0 m-b20">Follow Us</h5>
					<ul className="list-inline contact-social-bx m-b0">
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-facebook"></i></Link></li>
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-twitter"></i></Link></li>
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-linkedin"></i></Link></li>
						<li><Link to="#" className="btn outline radius-xl"><i className="fa fa-google-plus"></i></Link></li>
					</ul>
				</div>
			</>
		);
	}
}

export default ContactInfoCard;