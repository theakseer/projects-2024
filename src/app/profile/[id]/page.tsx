export default function UserProfile({ params }: { params: any }) {
  return (
    <div>
      {params.id} {/* Access the parameter directly */}
    </div>
  );
}
