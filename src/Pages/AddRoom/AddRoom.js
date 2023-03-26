import React, { useContext, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddRoom = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
    },
  });

  const { user, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb;

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const categoryObject = {};

  const getCategoryObject = () => {
    categories?.forEach((category) => {
      categoryObject[category.name] = category._id;
    });
  };

  getCategoryObject();

  const handleAddRoom = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const room = {
            categoryId: categoryObject[data.category],
            category: data.category,
            title: data.title,
            rating: data.rating,
            price: data.price,
            description: data.description,
            image: imgData.data.url,
            postingTime: new Date(),
          };
          console.log(room);

          //Insert Room Information to the MongoDB Database
          fetch("http://localhost:5000/addroom", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(room),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.title} is Added Successfully`, {
                position: "top-right",
              });
              reset();
              navigate("");
            });
        }
      });
  };

  return (
    <div style={{ marginBottom: "200px", marginTop: "50px" }}>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col sm={6} md={8} lg={8} xs={12}>
            <Card className="shadow-lg">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    Hospitable Hotel <br />
                  </h2>
                  <p className=" mb-4 fs-3 text-uppercase text-center">
                    Add Room
                  </p>
                  <div className="border border-2 border-warning"></div>
                  <div className="mt-4">
                    <Form onSubmit={handleSubmit(handleAddRoom)}>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="text-center">
                          Room Title
                        </Form.Label>
                        <Form.Control
                          name="title"
                          type="text"
                          {...register("title", {
                            required: "Room Title is Required",
                          })}
                          placeholder="Title"
                          autoFocus
                        />
                        {errors.title && (
                          <p className="text-danger mt-1">
                            {errors.title.message}
                          </p>
                        )}
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="category">
                          <Form.Label>Room Category</Form.Label>
                          <Form.Select
                            aria-label="category"
                            name="category"
                            {...register("category", {
                              required: "Category is Required",
                            })}
                          >
                            <option value="">Select Category</option>
                            {Object.keys(categoryObject)?.map(
                              (category, index) => (
                                <option key={index} value={category}>
                                  {category}
                                </option>
                              )
                            )}
                          </Form.Select>
                          {errors.category && (
                            <p className="text-danger mt-1">
                              {errors.category.message}
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            name="rating"
                            type="text"
                            {...register("rating", {
                              required: "Rating is Required",
                            })}
                            placeholder="Rating"
                            autoFocus
                          />
                          {errors.rating && (
                            <p className="text-danger mt-1">
                              {errors.rating.message}
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="price">
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            name="price"
                            type="number"
                            {...register("price", {
                              required: "Price is Required",
                            })}
                            placeholder="Price"
                            autoFocus
                          />
                          {errors.price && (
                            <p className="text-danger mt-1">
                              {errors.price.message}
                            </p>
                          )}
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Room Description</Form.Label>
                        <Form.Control
                          name="description"
                          as="textarea"
                          rows={2}
                          {...register("description", {
                            required: "Description is Required",
                          })}
                        />
                        {errors.description && (
                          <p className="text-danger mt-1">
                            {errors.description.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group controlId="file" className="mb-5">
                        <Form.Label className="fw-semibold">
                          Hotel Room Image
                        </Form.Label>
                        <Form.Control
                          type="file"
                          {...register("image", {
                            required: "Image is Required",
                          })}
                        />
                        {errors.image && (
                          <p className="text-danger mt-1">
                            {errors.image.message}
                          </p>
                        )}
                      </Form.Group>

                      <div className="d-grid mt-3">
                        <Button
                          className="fw-bold rounded-0"
                          variant="outline-success"
                          type="submit"
                        >
                          Add Room
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddRoom;
