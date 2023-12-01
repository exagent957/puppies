import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { PUPPY_SEX, PUPPY_COLOR, SORT_BY } from '../../../utils/constants';
import { usePuppiesContext } from '../pages/PuppiesLayout';
import { useLittersContext } from '../pages/LittersLayout';
import { BsPlusCircle } from 'react-icons/bs';

const PuppiesSearchContainer = () => {
  const { litters } = useLittersContext();
  const litterNames = litters.map((litter) => ({ key: litter._id, value: litter.litterName }));
  //can convert array of objects into object
  // const litterNamesObj = litterNames.reduce(
  //   (obj, item) => ({ ...obj, [item.key]: item.value }),
  //   {}
  // );
  const { searchValues } = usePuppiesContext();
  const { search, puppySex, puppyColor, sort } = searchValues;
  const submit = useSubmit(); //invokes the useSubmit hook

  // debounce feature controls how often form is submitted during key input
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <Link
          to="/dashboard/litters/puppies/puppy-add"
          className="btn form-btn"
          style={{ marginTop: '-2rem', marginBottom: '2rem' }}>
          <span>
            <BsPlusCircle className="icon" />
            new puppy
          </span>
        </Link>
        <hr style={{ marginTop: '-.4rem', marginBottom: '.8rem' }} />
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            labelText="search by puppy name"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            name="puppySex"
            labelText="sex"
            list={['Both', ...Object.values(PUPPY_SEX)]}
            defaultValue={puppySex}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="puppyColor"
            labelText="color"
            list={['All', ...Object.values(PUPPY_COLOR)]}
            defaultValue={puppyColor}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <div className="form-row">
            <label htmlFor="litter" className="form-label">
              litter
            </label>
            <select
              name="litter"
              id="litter"
              className="form-select"
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}>
              <option>All</option>
              {litterNames.map((item) => {
                return (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
          <FormRowSelect
            name="sort"
            labelText="sort by"
            defaultValue={sort}
            list={[...Object.values(SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link
            to="/dashboard/litters/puppies"
            className="btn form-btn delete-btn"
            onClick={(e) => e.currentTarget.form.reset()}>
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default PuppiesSearchContainer;
