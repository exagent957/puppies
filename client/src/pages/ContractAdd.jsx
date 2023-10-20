import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useClientsContext } from './ClientsLayout';
import { CONTRACT_TYPE } from '../../../utils/constants';

const puppiesAvailableQuery = () => {
  return {
    queryKey: ['puppies-available'],
    queryFn: async () => {
      const { data } = await customFetch.get(`/puppies/puppies-available`);
      return data;
    }
  };
};

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const clientId = params.id;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post(`/clients/${clientId}/contracts`, data);
      queryClient.invalidateQueries(['clientContracts']);
      toast.success('Contract added successfully ');
      return redirect('../');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
  };

const ContractAdd = () => {
  let today = Date();
  const data = useQuery(puppiesAvailableQuery());
  console.log(`results of puppiesAvailableQuery = ${JSON.stringify(data)}`);
  // const puppies = data.data;
  // console.log(`puppies = ${JSON.stringify(puppies)}`);
  // console.log(puppies.status);
  // const { puppyTempName } = puppies;
  // console.log(JSON.stringify(puppyTempName));

  // console.log(JSON.stringify(puppies.data[0]));
  const params = useParams();
  const clientId = params.id;
  const { clients } = useClientsContext();
  const client = clients.filter((client) => {
    return client._id === clientId;
  });
  const clientFirstName = client[0].clientFirstName;
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add contract for {clientFirstName} </h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="contractOpen"
            labelText="opened"
            defaultValue={today}
            required
          />
          <FormRow type="text" name="contractClose" labelText="closed" />
          <FormRowSelect
            labelText="type"
            name="contractType"
            defaultValue="black-male"
            list={Object.values(CONTRACT_TYPE)}
          />
          <FormRow type="text" name="contractNote" labelText="price" defaultValue="800" />
          <FormRow type="text" name="puppyPickOrder" labelText="pick order" />
          <FormRow
            type="text"
            name="puppy"
            labelText="puppy"
            defaultValue="6532ba5a7fc4c7b63168697d" //this is a placeholder puppyId until a real puppy is picked
          />
          <FormRow type="text" name="puppyPickUp" labelText="puppy pick up" />

          <FormRow type="text" name="contractNote" labelText="note" />

          <SubmitBtn formBtn btnText="add new contract" />
        </div>
      </Form>
    </Wrapper>
  );
};
export default ContractAdd;
