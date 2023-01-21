import React from 'react';
import {Link} from "react-router-dom";
import ROUTES_CONSTANT from "../routing/routes.const";

const NotFoundPage = () => {
    return (
        <section className="">
                        <div>
                            <div className="four_zero_four_bg">
                                <h1>404</h1>
                            </div>

                            <div className="content_box_404">
                                <h3>
                                    بنظر میرسه گم شدی!
                                </h3>
                                <p>این صفحه در دسترس نیست</p>
                                <Link to={ROUTES_CONSTANT.CONTACTS_ROUTE} className="link_404">برگرد به خانه</Link>
                            </div>
                        </div>
        </section>
    );
};

export default NotFoundPage;