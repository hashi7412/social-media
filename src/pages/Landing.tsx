import React from "react"
import Card from "../components/Card"
import Icons from "../components/Icons"
import Select from "../components/Select"

const Landing = () => {
    return (
        <>
            <div className="panel bg-light">
                <div className="wrap justify-between">
                    <div className="flex middle">
                        <div className="round-text mr3">
                            <span>C</span>
                        </div>
                        <div className="flex column gap1">
                            <h3 className="m0">Project #1</h3>
                            <div className="row">
                                <span className="label-item">Property #1</span>
                                <span className="label-item">Property #2</span>
                                <span className="label-item">Property #3</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap1">
                            <button className="btn btn-info">
                                <Icons.Page />
                                <span>Check Details</span>
                            </button>
                            <button className="btn btn-info">
                                <Icons.Reload />
                                <span>Reload</span>
                            </button>
                            <button className="btn btn-info"><Icons.Toolbar /></button> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-sx-12">
                        <div className="flex middle gap2 text-danger">
                            <div className="icon-wrap">
                                <Icons.Guard fill="var(--danger)" />
                            </div>
                            <div className="flex column">
                                <span className="bolder">Warning</span>
                                <small className="text-secondary">Status</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-sx-12">
                        <div className="flex middle gap2">
                            <div className="icon-wrap">
                                <Icons.CameraFill />
                            </div>
                            <div className="flex column">
                                <span className="bolder">37</span>
                                <small className="text-secondary">Posts</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-sx-12">
                        <div className="flex middle gap2">
                            <div className="icon-wrap">
                                <Icons.PageFill />
                            </div>
                            <div className="flex column">
                                <span className="bolder">49</span>
                                <small className="text-secondary">Files</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-sx-12">
                        <div className="flex middle gap2">
                            <div className="icon-wrap">
                                <Icons.Image />
                            </div>
                            <div className="flex column">
                                <span className="bolder">459</span>
                                <small className="text-secondary">Screenshots</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between middle py4">
                <span>{37} Posts</span>
                <div className="flex gap">
                    <Select 
                        label="Type" 
                        options={[
                            {key: "images", label: "Images"}
                        ]}
                        value={""}
                    />
                    <Select 
                        label="Categories" 
                        options={[
                            {key: "all", label: "All"}
                        ]}
                        value={""}
                    />
                    <Select 
                        label="Sorted by" 
                        options={[
                            {key: "newest", label: "Newest"}
                        ]}
                        value={""}
                    />
                </div>
            </div>
            <div className="wrap">
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image1.png")} title="Image1" status={"warning"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image2.png")} title="Image2" status={"warning"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image3.png")} title="Image3" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image4.png")} title="Image4" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image5.png")} title="Image5" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image6.png")} title="Image6" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image7.png")} title="Image7" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image8.png")} title="Image8" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image9.png")} title="Image9" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image10.png")} title="Image10" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image11.png")} title="Image11" status={"success"} />
                </div>
                <div className="col-xl-2 col-sm-3">
                    <Card image={require("../assets/images/Image12.png")} title="Image12" status={"success"} />
                </div>
            </div>
        </>
    )
}

export default Landing