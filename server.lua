AddEventHandler('playerConnecting', function(name, _, deferrals)
    local src = source
    local steam
    for _, v in pairs(GetPlayerIdentifiers(src)) do
        if string.find(v, 'steam') then
            steam = v
            break
        end
    end
    for k, v in pairs(cfg.identifiers) do 
        if v == steam then
            TriggerClientEvent('sh-joinAlert:joined', -1, name)
        end
    end
end)