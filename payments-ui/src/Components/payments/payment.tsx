import React from 'react'

interface FormData {
  name: string;
  age: number;
}

const Form=(): JSX.Element=> {
  const [formData, setFormData] = React.useState<FormData>({ name: '', age: 0});

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>):void=> {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit=(event: React.FormEvent<HTMLFormElement>):void =>{
    event.preventDefault();
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;  