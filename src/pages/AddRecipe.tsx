import { useRef, useState } from "react";
import { RecipeItem } from "../types/RecipeItem";
import { Button, Form, FormInstance, Input, InputNumber } from "antd";
import "./../styles/addRecipe.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface AddRecipeProps {
}

const AddRecipe: React.FC<AddRecipeProps> = () => {
    const formRef = useRef<FormInstance>(null);
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: any) => {
    const newItem: RecipeItem = {
        key: 4,
        title: values.title,
        imageUrl: values.image,
        cookTime: values.cook,
        prepTime: values.prep,
        servings: values.servings,
        ingredients: values.ingredients,
        cookingSteps: values.cookingSteps
    }
    //add update logic
    formRef.current?.resetFields();
  };



  return (
    <div className="add-recipe-page">
      <div className="add-recipe-form">
        <Form
        ref={formRef}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          onSubmitCapture={(e)=> e.preventDefault()}
          style={{ width: "100%" }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"title"}
            label="Title"
            rules={[{ required: true }]}
            style={{ textAlignLast: "center" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"image"}
            label="Image"
            rules={[{ required: true }]}
            style={{ textAlignLast: "center" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"prep"}
            label="Preping time"
            rules={[{ required: true }]}
            style={{ textAlignLast: "center" }}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name={"cook"}
            label="Cooking time"
            rules={[{ required: true }]}
            style={{ textAlignLast: "center" }}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name={"servings"}
            label="Servings"
            rules={[{ required: true }]}
            style={{ textAlignLast: "center" }}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <div style={{ width: "100%", marginLeft: "3rem" }}>
            <Form.List
              name="ingredients"
              rules={[
                {
                  validator: async (_, ingredients) => {
                    if (!ingredients || ingredients.length < 1) {
                      return Promise.reject(
                        new Error("At least one ingredient")
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={true}
                      key={field.key}
                      style={{ textAlignLast: "center", width: "100%" }}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        label="Ingredient"
                        style={{ textAlignLast: "center", width: "100%" }}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <AiOutlineMinusCircle
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "60%" }}
                      icon={<AiOutlinePlusCircle />}
                    >
                      Add ingredient
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List
              name="cookingSteps"
              rules={[
                {
                  validator: async (_, cookingSteps) => {
                    if (!cookingSteps || cookingSteps.length < 1) {
                      return Promise.reject(new Error("At least one step"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={true}
                      key={field.key}
                      style={{ textAlignLast: "center", width: "100%" }}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        label="Cooking step"
                        style={{ textAlignLast: "center", width: "100%" }}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <AiOutlineMinusCircle
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "60%" }}
                      icon={<AiOutlinePlusCircle />}
                    >
                      Add cooking step
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            style={{ textAlignLast: "end" }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddRecipe;
