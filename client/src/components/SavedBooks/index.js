import React from "react";

const SavedBookDetail = props => {
    return (
        <span>
            <div className="row" style={{ marginBottom: 20 }}>
                <div className="col-8">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.authors}</h6>
                </div>
                <div className="col-4">
                    <a href={props.link}
                        target="_blank"
                        style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            marginBottom: 10,
                            float: "right",
                            marginLeft: 10
                        }}
                        className="btn btn-primary">
                        View
        </a>
                    <button onClick={props.handleDelete} className="btn btn-primary save-btn"
                        style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            marginBottom: 10,
                            float: "right",
                            marginLeft: 10
                        }}>
                        Delete
        </button>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <img src={props.image} alt="..." className="img-thumbnail" />
                </div>
                <div className="col-10">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
            <hr style={{ clear: "both" }} />
        </span>
    );
}

export default SavedBookDetail;