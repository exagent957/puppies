import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import { usePuppyHealthEventsContext } from './PuppyHealthEventsLayout';

const singlePuppyHealthEventQuery = (id) => {
  return {
    queryKey: ['puppy', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/healthEvents/${id}`);
      return data;
    }
  };
};

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.put(`/healthEvents/${params.eventId}`, data);
      queryClient.invalidateQueries(['puppy']);
      toast.success('Health event edited successfully');
      return redirect(`/dashboard/litters/puppies/${params.id}/puppy-health-events`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const PuppyHealthEventEdit = () => {
  const { puppyObj } = usePuppyHealthEventsContext(); //brings in puppy object
  const { puppyTempName } = puppyObj;
  const params = useParams();
  const eventId = params.eventId;
  const { data } = useQuery(singlePuppyHealthEventQuery(eventId), {
    onSuccess: (data) => {
      return data;
    }
  });
  const getEvent = () => {
    if (data) {
      const healthEvent = data.data.data;
      return healthEvent;
    }
  };
  const healthEvent = getEvent();
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit health record for {puppyTempName}</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="eventDate"
            labelText="date"
            defaultValue={healthEvent && healthEvent.eventDate}
          />

          <FormRow
            type="text"
            name="description"
            labelText="description"
            defaultValue={healthEvent && healthEvent.description}
          />
          <FormRow
            type="text"
            name="grams"
            labelText="weight in grams"
            defaultValue={healthEvent && healthEvent.grams}
          />
          <SubmitBtn formBtn btnText="save changes" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default PuppyHealthEventEdit;
