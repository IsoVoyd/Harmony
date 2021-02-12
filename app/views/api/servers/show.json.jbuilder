json.id @server.id
json.name @server.name
json.owner_id @server.owner_id

json.user_ids do
    user_ids = []
    @server.users.each { |user| user_ids << user.id }
    json.array! user_ids
end

json.users do
    @server.users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username
        end
    end
end