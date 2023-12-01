import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/litters', data);
      queryClient.invalidateQueries(['litters']);
      toast.success('Litter added successfully ');
      return redirect('/dashboard/litters');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const LitterAdd = () => {
  let today = Date();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title"> add litter</h4>
        <div className="form-center">
          <FormRow type="text" name="litterName" labelText="name" />
          <FormRow type="text" name="litterAKC" labelText="litter AKC" />
          <FormRow type="text" name="sireName" labelText="sire" defaultValue="Jacob" />
          <FormRow type="text" name="damName" labelText="dam" />
          {/* <FormRowSelect labelText="dam" name="dam" defaultValue={''} list={''} /> */}
          <FormRow type="text" name="litterConceived" labelText="conceived" />
          <FormRow type="text" name="litterDelivered" labelText="delivered" defaultValue={today} />
          <FormRow type="text" name="femalesBorn" labelText="# females" defaultValue="0" />
          <FormRow
            type="text"
            name="femalesSurvived"
            labelText="females survived"
            defaultValue="0"
          />
          <FormRow type="text" name="malesBorn" labelText="# males" defaultValue="0" />
          <FormRow type="text" name="malesSurvived" labelText="males survived" defaultValue="0" />
          <FormRow type="text" name="puppiesBlack" labelText="black" defaultValue="0" />
          <FormRow type="text" name="puppiesChocolate" labelText="chocolate" defaultValue="0" />
          <FormRow type="text" name="puppiesYellow" labelText="yellow" defaultValue="0" />
          <FormRow type="text" name="litterNote" labelText="note" />
          <SubmitBtn formBtn btnText="add new litter" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default LitterAdd;
