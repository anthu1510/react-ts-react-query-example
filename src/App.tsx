import { List, Spin, Alert } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/post.api';

function App() {
  const posts = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  if (posts.isLoading) return <Spin />

  if (posts.error instanceof Error) return <Alert message={posts.error.message} type="error" showIcon />

  return (
    <List
      size="small"
      bordered
      dataSource={posts.data}
      renderItem={item => <List.Item>{item.title}</List.Item>}
    />
  )
}

export default App
