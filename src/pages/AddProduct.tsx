import React, { FC, ReactElement } from "react";
import { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Upload } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const props: UploadProps = {
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
};

interface AddProductProps {}

const AddProduct: FC<AddProductProps> = ({}): ReactElement => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <div>
        <div>
          <h3>Dodaj proizvod</h3>
        </div>
        <div>
          <div></div>
          <div>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              layout="vertical"
            >
              <Form.Item name="nameOfProduct" label="Ime proizvoda" required>
                <Input />
              </Form.Item>

              <Form.Item name="codeOfProduct" label="Sifra proizvoda">
                <Input />
              </Form.Item>

              <Form.Item name="brand" label="Brend">
                <Select />
              </Form.Item>

              <Form.Item name="material" label="Materijal">
                <Select />
              </Form.Item>

              <Form.Item name="category" label="Kategorija" required>
                <Select />
              </Form.Item>

              <Form.Item name="subcategory" label="Podkategorija" required>
                <Select />
              </Form.Item>

              <Form.Item name="price" label="Cena proizvoda" required>
                <InputNumber />
              </Form.Item>

              <Form.Item name="discountPrice" label="Snizena cena proizvoda">
                <InputNumber />
              </Form.Item>

              <Form.Item name="isOnDiscount" label="Da li je snizen">
                <Switch />
              </Form.Item>

              <Form.Item name="warranty" label="Garancija">
                <Select />
              </Form.Item>

              <Form.Item name="unit" label="Jedinica">
                <Select />
              </Form.Item>

              <Form.Item name="productNote" label="Kratak opis">
                <Input />
              </Form.Item>

              <Form.Item name="productDesc" label="Opis">
                <Input.TextArea />
              </Form.Item>

              <Form.Item name="deliveryTime" label="Vreme za dostavu u danima">
                <InputNumber />
              </Form.Item>

              <Form.Item name="isAvailable" label="Da li je dostupno">
                <Select />
              </Form.Item>

              <Form.Item name="label" label="Oznaka">
                <Select />
              </Form.Item>

              <Form.Item name="pictures" label="Slike">
                <Upload
                  {...props}
                  beforeUpload={() => {
                    return false;
                  }}
                >
                  <Button icon={<UploadOutlined />}>Dodaj slike</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sacuvaj
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
