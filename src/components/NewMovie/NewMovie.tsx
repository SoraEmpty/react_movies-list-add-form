import { FormEvent, useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

  type Props = {
    onSubmit: (movie:Movie) => void;
  }

export const NewMovie: React.FC<Props> = ({ onSubmit }) => {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });
  let { title,
    description,
    imgUrl,
    imdbUrl,
    imdbId
  } = form;

  const handleReset = () => {
    setForm({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });
  }

    const handleSumbit = (event: React.FormEvent) => {
      event.preventDefault();

      onSubmit({
          title,
          description,
          imgUrl,
          imdbUrl,
          imdbId,
      })
      setCount(c => c + 1);
      handleReset();
    };

    const isButtonDisabled = !title.trim() || !imgUrl.trim() || !imdbUrl.trim() || !imdbId.trim();
const handleChange = (field: keyof typeof form) => (value: string) => {
  setForm(prev => ({
    ...prev,
    [field]: value,
  }));
};



  return (
    <form className="NewMovie" key={count}
    onSubmit={handleSumbit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={
          handleChange('title')
        }
        required
      />

      <TextField
      name="description"
      label="Description"
      value={description}
              onChange={
          handleChange('description')
        } />

      <TextField
      name="imgUrl"
      label="Image URL"
      value={imgUrl}
              onChange={
          handleChange('imgUrl')
        }
        required/>

      <TextField
      name="imdbUrl"
      label="Imdb URL"
      value={imdbUrl}
              onChange={
          handleChange('imdbUrl')
        }
        required/>

      <TextField
      name="imdbId"
      label="Imdb ID"
      value={imdbId}
              onChange={
          handleChange('imdbId')
        }
        required/>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={isButtonDisabled}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
